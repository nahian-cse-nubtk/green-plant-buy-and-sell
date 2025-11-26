import Banner from "@/Components/Banner";
import CustomerTestimonial from "@/Components/CustomerTestimonial";
import FeaturedCategories from "@/Components/FeaturedCategories";
import LatestProducs from "@/Components/LatestProducs";
import WhyChooseUs from "@/Components/WhyChooseUs";


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
      <WhyChooseUs></WhyChooseUs>
      </div>
      {/* Customer Testimonials */}

      <div>
        <CustomerTestimonial></CustomerTestimonial>
      </div>

    </div>
  );
}
