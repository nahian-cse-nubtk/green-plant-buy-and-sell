import Banner from "@/Components/Banner";
import FeaturedCategories from "@/Components/FeaturedCategories";
import LatestProducs from "@/Components/LatestProducs";
import Image from "next/image";

export default function Home() {
  return (

    <div>
      {/* hero section */}
      <div>
        <Banner></Banner>
      </div>

      {/*Featured Categories  */}
      <div>
      <FeaturedCategories></FeaturedCategories>
      </div>

      {/* New Arrivals */}
      <div>
        <LatestProducs></LatestProducs>

      </div>

      {/* Why Choose Us? */}
      <div>

      </div>
      {/* Customer Testimonials */}

      <div>

      </div>

    </div>
  );
}
