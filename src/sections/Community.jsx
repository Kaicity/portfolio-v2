import { cn } from '../lib/utils';
import { slugs } from '../data/skillIcon';
import { IconCloud } from '../components/IconCloud';

function Community() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Thêm tiêu đề mô tả tại đây */}
      <div className="absolute top-20 z-10 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Community & Tech Stack
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Technologies I've explored and loved working with — let's connect!
        </p>
      </div>

      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </div>
  );
}

export default Community;
