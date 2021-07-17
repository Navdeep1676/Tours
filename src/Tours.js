import Tour from "./Tour";
const Tours = ({tours,rem}) => {
  return (
    <section>
      <div>
        <h2 className="text-decoration-underline mb-1 d-block text-center mx-auto">
          Our Tours
        </h2>
      </div>
      <div>
          {
              tours.map((tour)=>{
                  return <Tour key={tour.id} {...tour} rem={rem}/>
              })
          }
      </div>
    </section>
  );
};
export default Tours;
