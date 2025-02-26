import Image from 'next/image';

interface BeforeAfterItem {
  id: number;
  title: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

const galleryItems: BeforeAfterItem[] = [
  {
    id: 1,
    title: 'Lawn Renovation',
    beforeImg: '/images/gallery/before-after/job1-before.jpg',
    afterImg: '/images/gallery/before-after/job1-after.jpg',
    description: 'Complete lawn transformation with new sod installation'
  },
  {
    id: 2,
    title: 'Garden Cleanup',
    beforeImg: '/images/gallery/before-after/job2-before.jpg',
    afterImg: '/images/gallery/before-after/job2-after.jpg',
    description: 'Overgrown garden restored to pristine condition'
  }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Transformations</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Before</h3>
                  <div className="relative h-48">
                    <Image
                      src={item.beforeImg}
                      alt={`${item.title} before`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">After</h3>
                  <div className="relative h-48">
                    <Image
                      src={item.afterImg}
                      alt={`${item.title} after`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 