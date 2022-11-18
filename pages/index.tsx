//Create a react function component
import Container from "src/components/container";
import Image from "next/image";
import WysiwygWrapper from "src/components/wysiwygWrapper";
import Icons from "src/components/icons";

interface Data {
  title: string;
  articles: Array<{
    image: any;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  }>;
}

const data = {
  title: "Headline cropped lorem ipsum dolor sit amet",
  articles: [
    {
      image: {
        url: "/images/placeholder.png",
        alt: "image",
      },
      items: [
        {
          icon: "dummy",
          title: "Item headline",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur. At fermentum dsd d ds s scelerisque nisl tempus sit cras lacus lacus fringilla.</p>",
        },
        {
          icon: "dummy",
          title: "Item headline",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur. At fermentum dsd d ds s scelerisque nisl tempus sit cras lacus lacus fringilla.</p>",
        },
        {
          icon: "",
          title: "Item headline",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur. At fermentum dsd d ds s scelerisque nisl tempus sit cras lacus lacus fringilla.</p>",
        },
      ],
    },
    {
      image: {
        url: "/images/long.jpg",
        alt: "image",
      },
      items: [
        {
          icon: "dummy",
          title: "Item headline",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur. At fermentum dsd d ds s scelerisque nisl tempus sit cras lacus lacus fringilla.</p>",
        },
        {
          icon: "dummy",
          title: "Item headline",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur. At fermentum dsd d ds s scelerisque nisl tempus sit cras lacus lacus fringilla.</p>",
        },
        {
          icon: "dummy",
          title: "Item headline",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur. At fermentum dsd d ds s scelerisque nisl tempus sit cras lacus lacus fringilla.</p>",
        },
      ],
    },
  ],
};

const SinglePostWithItems = () => {
  return (
    <Container classNameInner="px-5 md:px-8 lg:px-16 pt-14 lg:pt-[150px] pb-4 lg:pb-[50px]">
      <div className="flex flex-col">
        {data.title && (
          <div className="w-full mb-12 lg:mb-25">
            <h2 className="text-center mx-auto h2 max-w-[600px] lg:max-w-[968px]">{data.title}</h2>
          </div>
        )}
        <div className="w-full">
          {data.articles.map((article, index) => {
            const reverse = index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";
            const justify = index % 2 === 0 ? "lg:justify-end" : "lg:justify-start";
            return (
              <div key={index} className={`w-full mb-10 lg:mb-25 lg:flex ${reverse} lg:gap-[72px]`}>
                <div className={`w-full flex items-center justify-center ${justify} mb-8 lg:mb-0 lg:w-1/2`}>
                  <div className="lg:p-[10px]">
                    <Image
                      src={article.image.url}
                      alt={article.image.alt}
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
                <div
                  className={`w-full flex flex-col ${justify} lg:justify-center items-center gap-8 lg:w-1/2`}
                >
                  {article.items.map((item, index) => (
                    <div key={index} className="max-w-[600px] lg:max-w-[668px]">
                      <div className="mb-3">
                        <Icons name={item.icon} />
                      </div>
                      <div className="">
                        <h3 className="mb-1 h3 lg:h5">{item.title}</h3>
                        <WysiwygWrapper className="body3 lg:body1" content={item.description} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default SinglePostWithItems;
