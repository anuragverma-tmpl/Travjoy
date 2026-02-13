import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardLayout = ({title,description,price,image}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Carousel>
            <CarouselContent>
              <CarouselPrevious />
              <CarouselItem>{image} </CarouselItem>
              <CarouselItem>{image} </CarouselItem>
              <CarouselItem>{image} </CarouselItem>
              <CarouselNext />
            </CarouselContent>
          </Carousel>
        </CardHeader>

        <CardFooter>
          <CardTitle>{title} </CardTitle>
          <CardDescription>{description} </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardLayout;
