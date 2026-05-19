import { useTranslations } from 'next-intl';
import { PageIntro } from '@/components/ui/PageIntro';

export default function ExhibitionsPage() {
  const t = useTranslations('pages');
  const nav = useTranslations('nav');

  return (
    <PageIntro
      eyebrow={nav('exhibitions')}
      title={t('exhibitionsTitle')}
      description={t('exhibitionsDescription')}
    />
  );
}