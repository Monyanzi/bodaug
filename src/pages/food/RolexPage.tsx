import React from 'react';
import { Link } from 'react-router-dom';

const RolexPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* A hero image component would typically go here */}
      <h1 className="text-4xl font-bold mb-2">The Ugandan Rolex: A National Treasure Wrapped in a Chapati</h1>
      <p className="text-lg text-gray-600 mb-6">Discover the story behind the iconic street food that fuels Uganda, a delicious and clever play on "rolled eggs."</p>

      <div className="prose max-w-none"> {/* Using a prose class for typography defaults */}

        <p>Across Uganda, from the bustling streets of Kampala to quiet village trading posts, there is one sound that promises a quick, delicious, and satisfying meal: the sizzle of eggs on a hot plate. This is the sound of the Rolex being born. Far from a luxury timepiece, the Ugandan Rolex is the country's undisputed king of street food—a warm chapati embracing a savory omelette filled with fresh tomatoes and onions. It’s a cultural unifier, enjoyed by students, business people, and travelers alike. It’s not just food; it’s a piece of Ugandan identity.</p>

        <h3 className="text-2xl font-bold mt-8 mb-4">The Anatomy of a Perfect Rolex 🍳</h3>
        <p>At its heart, the Rolex is beautifully simple, but the magic is in the combination of fresh, hot ingredients, cooked right before your eyes.</p>
        <ul>
          <li><strong>The Foundation (The Chapati):</strong> A soft, flaky, and slightly chewy flatbread, cooked to a perfect golden-brown on a griddle. It's the vessel that holds everything together.</li>
          <li><strong>The Heart (The Eggs):</strong> Two or three eggs are whisked and fried into a thin, wide omelette. This isn't a fluffy French omelette; it's a robust, flavorful sheet of egg that becomes the savory core.</li>
          <li><strong>The Crunch & Flavour (The Vegetables):</strong> Finely chopped fresh ingredients are mixed into the eggs or added on top before rolling. The holy trinity is: Tomatoes, Onions, and Cabbage.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">The Theatre of the Street: How It's Made</h3>
        <p>Watching a Rolex vendor—or "Rolex guy"—is pure street theatre. The process is a rapid, mesmerizing dance of skill and efficiency.</p>
        <ol>
          <li><strong>The Sizzle:</strong> A ladle of oil hits the hot flat-top griddle with a satisfying sizzle.</li>
          <li><strong>The Pour:</strong> The whisked egg and vegetable mixture is poured onto the griddle, spreading out into a thin circle.</li>
          <li><strong>The Flip:</strong> With a flick of the wrist and a wide spatula, the omelette is expertly flipped.</li>
          <li><strong>The Union:</strong> A ready-made chapati is placed on top of the cooking omelette, warming it through and fusing the two together.</li>
          <li><strong>The Roll:</strong> The entire combination is lifted from the griddle, placed on a piece of paper, and rolled tightly into a delicious, portable cylinder. It’s handed to you piping hot, ready to eat on the go.</li>
        </ol>

        <blockquote className="border-l-4 border-yellow-400 pl-4 italic my-6">
          "It's perfect for this time of day here in Johannesburg, just after 3 PM. In Kampala, this is prime time for grabbing a Rolex to power through the rest of the afternoon."
        </blockquote>

        <h3 className="text-2xl font-bold mt-8 mb-4">Make It Your Own: Popular Variations</h3>
        <p>While the classic Rolex is perfect as is, many vendors offer extras to customize your meal. Common additions include avocado, beans, sausage, or spiced minced meat.</p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Go Deeper with Boda 🔗</h3>
        <p>The Rolex is just the beginning of Uganda's incredible culinary journey. From the steamed perfection of Luwombo to the smoky flavour of grilled tilapia, there's a world of taste to explore.</p>

      </div>

      {/* This is the contextual CTA block */}
      <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
        <h4 className="font-bold text-xl">Want the ultimate food guide for your trip?</h4>
        <p className="mt-2">The Boda <strong>Traveler's Edition</strong> book features a dedicated chapter on street food, with maps to the best spots and a guide to can't-miss dishes beyond the Rolex.</p>
        <Link to="/preorder" className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg mt-4 hover:bg-yellow-500 transition-colors">
          Pre-order the Traveler's Edition
        </Link>
      </div>
    </main>
  );
};

export default RolexPage;
