import { useTranslations } from 'next-intl';
import { PageIntro } from '@/components/ui/PageIntro';

export default function ContactPage() {
  const t = useTranslations('pages');
  const nav = useTranslations('nav');

  return (
    <PageIntro
      eyebrow={nav('contact')}
      title={t('contactTitle')}
      description={t('contactDescription')}
    />
  );
}