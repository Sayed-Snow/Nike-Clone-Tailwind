import {  Hero, Servers,SpecialOffers,Subscription,SuperQuailty,Footer,PopularProduct,CustomerReviews } from "./sections/index";
import Nav from "./components/Nav";
const App = () => (
  <main className="'relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
      <SuperQuailty/>
    </section>
    <section className="padding-x py-10">
      <Servers/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscription/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App