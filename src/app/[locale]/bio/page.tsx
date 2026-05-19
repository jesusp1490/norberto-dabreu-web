import { useTranslations } from 'next-intl';
import { PageIntro } from '@/components/ui/PageIntro';

export default function BioPage() {
  const t = useTranslations('pages');
  const nav = useTranslations('nav');

  return (
    <PageIntro
      eyebrow={nav('bio')}
      title={t('bioTitle')}
      description={t('bioDescription')}
    />
  );
}