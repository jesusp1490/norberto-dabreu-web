import { useTranslations } from 'next-intl';
import { PageIntro } from '@/components/ui/PageIntro';

export default function TestimonialsPage() {
  const t = useTranslations('pages');
  const nav = useTranslations('nav');

  return (
    <PageIntro
      eyebrow={nav('testimonials')}
      title={t('testimonialsTitle')}
      description={t('testimonialsDescription')}
    />
  );
}