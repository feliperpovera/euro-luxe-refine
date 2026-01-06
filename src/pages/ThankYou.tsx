import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-20 w-20 text-primary" />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          Thank You!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        <Link to="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
