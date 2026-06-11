import { LegalLayout } from '../components/legal/LegalLayout';
import { privacidade } from '../data/legal';

export function Privacidade() {
  return <LegalLayout {...privacidade} />;
}
