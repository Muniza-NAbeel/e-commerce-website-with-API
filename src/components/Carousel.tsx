import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/carousel/image.jpg"
            alt="slide1"
            width={900}
            height={40}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide7" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/carousel/5.jpg"
            alt="slide2"
            width={900}
            height={40}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide1" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/carousel/3.webp"
            alt="slide3"
            width={900}
            height={40}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide2" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide4" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="/carousel/4.jpg"
            alt="slide4"
            width={900}
            height={40}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide3" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide5" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
          <Image
            src="/carousel/6.jpg"
            alt="slide5"
            width={900}
            height={40}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide6" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full">
          <Image
            src="/carousel/2.jpg"
            alt="slide6"
            width={900}
            height={40}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide5" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide7" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>

        <div id="slide7" className="carousel-item relative w-full">
          <Image
            src="/carousel/7.jpg"
            alt="slide7"
            width={900}
            height={40}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide6" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide1" className="btn btn-circle">
              ❯
</Link>
          </div>
        </div>
      </div>
    </>
  );
}
