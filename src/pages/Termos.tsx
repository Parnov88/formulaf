import { LegalLayout } from '../components/legal/LegalLayout';
import { termos } from '../data/legal';

export function Termos() {
  return <LegalLayout {...termos} />;
}
