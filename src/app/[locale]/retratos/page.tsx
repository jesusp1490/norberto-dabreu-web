import { useTranslations } from 'next-intl';
import { PageIntro } from '@/components/ui/PageIntro';

export default function PortraitsPage() {
  const t = useTranslations('pages');
  const nav = useTranslations('nav');

  return (
    <PageIntro
      eyebrow={nav('portraits')}
      title={t('portraitsTitle')}
      description={t('portraitsDescription')}
    />
  );
}