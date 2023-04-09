import { useInView } from "react-intersection-observer";

export default function App() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log("inview", inView);

  return (
    <>
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis
        nesciunt rerum assumenda voluptatum perspiciatis at unde excepturi,
        architecto magni molestias tempora eaque in odit sunt optio? Soluta,
        facilis iste?
      </div>
    </>
  );
}
