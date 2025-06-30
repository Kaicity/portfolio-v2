import { IconCloud } from './IconCloud';
import { SparklesText } from './SparklesText';
import { slugs } from '../data/skillIcon';

export const Skill = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section className="c-space section-spacing">
      <SparklesText>
        <h1 className="text-heading">Skill</h1>
      </SparklesText>

      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </section>
  );
};
