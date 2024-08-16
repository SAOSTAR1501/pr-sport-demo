// src/app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Về PR SPORT</h1>

      <div className="mb-12">
        <Image
          src="/images/about-hero.jpg"
          alt="PR SPORT Team"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Câu chuyện của chúng tôi</h2>
          <p className="mb-4">
            PR SPORT được thành lập vào năm 2010 bởi những người đam mê chạy bộ.
            Chúng tôi bắt đầu như một cửa hàng nhỏ tại Hà Nội, với mục tiêu cung
            cấp những sản phẩm chạy bộ chất lượng cao cho cộng đồng người yêu
            thể thao.
          </p>
          <p>
            Sau hơn một thập kỷ, PR SPORT đã phát triển thành một trong những
            thương hiệu hàng đầu trong lĩnh vực bán lẻ đồ thể thao chạy bộ tại
            Việt Nam, với nhiều chi nhánh trên toàn quốc và một cộng đồng khách
            hàng trung thành.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Sứ mệnh của chúng tôi</h2>
          <p className="mb-4">
            Tại PR SPORT, chúng tôi tin rằng mọi người đều có thể trở thành vận
            động viên. Sứ mệnh của chúng tôi là truyền cảm hứng và hỗ trợ mọi
            người trong hành trình chạy bộ của họ, bất kể họ đang ở đâu trên con
            đường đó.
          </p>
          <p>
            Chúng tôi cam kết cung cấp những sản phẩm tốt nhất, lời khuyên
            chuyên môn, và một cộng đồng hỗ trợ để giúp bạn đạt được mục tiêu
            chạy bộ của mình.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Giá trị cốt lõi của chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Chất lượng</h3>
            <p>
              Chúng tôi chỉ cung cấp những sản phẩm chất lượng cao nhất từ các
              thương hiệu uy tín.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Chuyên môn</h3>
            <p>
              Đội ngũ nhân viên của chúng tôi là những người đam mê chạy bộ và
              có kiến thức sâu rộng về sản phẩm.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Cộng đồng</h3>
            <p>
              Chúng tôi tạo ra một cộng đồng nơi các runner có thể kết nối, học
              hỏi và truyền cảm hứng cho nhau.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Đội ngũ của chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {["CEO", "COO", "Head of Marketing", "Head of Product"].map(
            (role, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/images/team-member-${index + 1}.jpg`}
                  alt={`Team member ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold">{role}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
