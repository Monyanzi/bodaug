import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BodaButton } from "@/components/ui/boda-button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const PreordersPage = () => {
  const [preorders, setPreorders] = useState<any[]>([]);
  const [filteredPreorders, setFilteredPreorders] = useState<any[]>([]);
  const [emailFilter, setEmailFilter] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const storedPreorders = JSON.parse(localStorage.getItem("preorders") || "[]");
    setPreorders(storedPreorders);
    setFilteredPreorders(storedPreorders);

    const storedEmail = localStorage.getItem("preorderEmail");
    if (storedEmail) {
      setEmailFilter(storedEmail);
      setFilteredPreorders(
        storedPreorders.filter((order: any) => order.email === storedEmail)
      );
    }
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmailFilter(email);
    if (email) {
      setFilteredPreorders(
        preorders.filter((order) =>
          order.email.toLowerCase().includes(email.toLowerCase())
        )
      );
    } else {
      setFilteredPreorders(preorders);
    }
  };

  const handleClearHistory = () => {
    localStorage.removeItem("preorders");
    localStorage.removeItem("preorderEmail");
    setPreorders([]);
    setFilteredPreorders([]);
    setEmailFilter("");
    toast({
      title: "History Cleared",
      description: "Your pre-order history has been cleared.",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              My Pre-orders
            </h1>
            <p className="text-xl text-muted-foreground">
              View and manage your pre-ordered editions of the Boda Book Series.
            </p>
          </div>

          <Card className="boda-card">
            <CardHeader>
              <CardTitle>Your Pre-order History</CardTitle>
              <div className="flex items-center space-x-4 pt-4">
                <Input
                  placeholder="Filter by email..."
                  value={emailFilter}
                  onChange={handleFilterChange}
                  className="max-w-sm boda-input"
                />
                <BodaButton variant="destructive" onClick={handleClearHistory}>
                  Clear History
                </BodaButton>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Edition</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Country</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPreorders.length > 0 ? (
                    filteredPreorders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>
                          {new Date(order.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{order.email}</TableCell>
                        <TableCell>{order.edition}</TableCell>
                        <TableCell>{order.name || "N/A"}</TableCell>
                        <TableCell>{order.country || "N/A"}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">
                        No pre-orders found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PreordersPage;
