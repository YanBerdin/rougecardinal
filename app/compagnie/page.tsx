import { Metadata } from 'next';
import CompagnieClientPage from './client-page';

export const metadata: Metadata = {
  title: 'La Compagnie | Rouge-Cardinal',
  description: 'Découvrez l\'histoire, la mission et l\'équipe de la compagnie de théâtre Rouge-Cardinal.',
};

export default function CompagniePage() {
  return (
    <div>
      <CompagnieClientPage />
    </div>
  );
}