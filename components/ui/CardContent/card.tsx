import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Cardlayout = () => {
  return (
    <div>
      <Card className="border rounded w-55">
        <Carousel className="relative">
          <CarouselContent>
            <CarouselItem><Image src="/LISTING IMG.jpg" alt="Logo" 
                          width={100}
                          height={100}/></CarouselItem>
            <CarouselItem><Image src="/travjoy.jpg" alt="Logo" 
                          width={100}
                          height={100}/></CarouselItem>
            <CarouselItem><Image src="/file.svg" alt="Logo" 
                          width={100}
                          height={100}/></CarouselItem>
          </CarouselContent>
        </Carousel>

        <CardContent className="border-b">
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cardlayout;
