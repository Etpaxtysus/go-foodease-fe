import Image from "next/image";
import { useRouter } from "next/navigation";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

interface ProductCardProps {
  productId: string;
  productName: string;
  originPrice: string;
  salePrice: string;
  location: string;
  image_url: string | null;
  rating: number;
}

function ProductCard(props: ProductCardProps) {
  const router = useRouter();
  const {
    productId,
    productName,
    originPrice,
    salePrice,
    location,
    image_url,
    rating,
  } = props;

  const handleDetailProduct = (productId: string) => {
    const currentPath = window.location.pathname
    router.push( `${currentPath}/product/${productId}`);
  };

  const Star = <path d="M440 60l120 336h320L618 592l94 348-272-208-272 208 94-348L0 396h320L440 60" />

  const customStyles = {
    itemShapes: Star,
    activeFillColor: '#FFC633',
    inactiveFillColor: '#D9D9D9',
  };

  return (
    <button onClick={() => handleDetailProduct(productId)}>
      <div className="flex flex-col p-3 border-[1px] border-[#d2d2d2] rounded-md shadow-md hover:scale-[103%] transition-all duration-400">
        <div className="flex justify-center w-full">
          <Image
            src={image_url || "https://placehold.co/160x120?text=Product Image"}
            width={160}
            height={120}
            alt="Product Image"
            className="object-cover mx-auto rounded-md lg:w-[268px] lg:h-[200px]"
          />
        </div>
        <div className="flex mx-auto max-w-[272px]">
          <div className="flex flex-col gap-[6px] w-full text-left p-2">
            <p className="text-m-h4 font-bold text-black w-full  line-clamp-1 lg:text-d-h4 ">
              {productName}
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="text-m-h3 text-success font-bold lg:text-d-h3">
                Rp{salePrice}
              </p>
              <p className=" text-danger-600 font-bold text-m-h5 line-through lg:text-d-h5">
                Rp{originPrice}
              </p>
            </div>
            <div className="flex gap-1.5 items-start overflow-hidden">
              <p className="text-black text-m-b2 line-clamp-2 lg:text-d-b2">{location}</p>
            </div>
            <div className="flex w-full items-center gap-2 text-m-b2 lg:text-d-b2">
              <div className="flex lg:w-[50%] ">
                <Rating readOnly value={rating} itemStyles={customStyles}/>
              </div>
              <div className="flex items-center">{rating}/5</div>
            </div>
          </div>

        </div>
      </div>
    </button>
  );
}

export default ProductCard;
