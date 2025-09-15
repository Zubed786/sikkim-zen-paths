import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="monastery-card w-full max-w-2xl text-center">
        <CardContent className="p-12">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-6xl font-bold text-gradient-saffron mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Sacred Path Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            It seems you've wandered off the spiritual path. The page you're looking for 
            doesn't exist in our digital monastery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-saffron">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/heritage">
                <Search className="w-4 h-4 mr-2" />
                Explore Heritage
              </Link>
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-8">
            "Not all who wander are lost" - but this page definitely is.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
