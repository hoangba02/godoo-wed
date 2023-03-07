import { useNavigate } from 'react-router-dom';
import History from '../History/History';

export default function Navigate() {
  History.navigate = useNavigate();

  return null;
}
