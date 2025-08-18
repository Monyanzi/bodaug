import { useState } from "react";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const PreorderModule = () => {
  const [email, setEmail] = useState("");
  const [edition, setEdition] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to reserve your copy.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: "Reserved successfully!",
      description: "You'll receive launch updates and early access.",
    });
    setEmail("");
    setEdition("");
  };

  return (
    <Card className="w-full max-w-md boda-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Pre-order the Boda Book Series</CardTitle>
        <p className="text-sm text-muted-foreground">
          Reserve your copy and be the first to own the definitive cultural & travel showcase of Uganda.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="boda-input"
            required
          />
          
          <Select value={edition} onValueChange={setEdition}>
            <SelectTrigger className="boda-input">
              <SelectValue placeholder="Edition interest (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="definitive">Definitive Edition</SelectItem>
              <SelectItem value="traveler">Traveler Edition</SelectItem>
              <SelectItem value="children">Children's Edition</SelectItem>
              <SelectItem value="scholar">Scholar Edition</SelectItem>
              <SelectItem value="investor">Investor Edition</SelectItem>
            </SelectContent>
          </Select>

          <BodaButton type="submit" variant="primary" className="w-full">
            Reserve your copy
          </BodaButton>
          
          <p className="text-xs text-muted-foreground text-center">
            No spam. You'll only get launch updates and early access.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default PreorderModule;