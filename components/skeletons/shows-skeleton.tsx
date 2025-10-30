import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ShowsSkeleton() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Shows cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              {/* Image skeleton */}
              <div className="relative">
                <Skeleton className="h-48 w-full" />
                <div className="absolute top-4 left-4">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Title skeleton */}
                <Skeleton className="h-6 w-full mb-3" />
                
                {/* Description skeleton */}
                <div className="space-y-2 mb-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
                
                {/* Info skeleton */}
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center">
                      <Skeleton className="h-4 w-4 mr-3" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <div className="flex space-x-2 w-full">
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 w-20" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA button skeleton */}
        <div className="text-center">
          <Skeleton className="h-12 w-48 mx-auto" />
        </div>
      </div>
    </section>
  );
}