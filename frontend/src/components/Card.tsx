import { useNavigate } from 'react-router-dom';
import chessIcon from '../../public/chess.png';
import lightningIcon from '../../public/lightning-bolt.png';

export function PlayCard() {
  const navigate = useNavigate();

  const handleClick = () => navigate('/game/random');

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer border-none">
        <p className="text-lg font-semibold text-green-600">Play Chess</p>
        <img className="w-1/2 mt-4" src={chessIcon} alt="chess" />
      </div>
      <div
        onClick={handleClick}
        className="-mx-2 mt-1 bg-bgAuxiliary2 flex items-start space-x-4 rounded-sm p-2 transition-all shadow-lg"
      >
        <img src={lightningIcon} className="h-7 w-7 inline-block mt-1" alt="online" />
        <div className="space-y-1">
          <p className="text-sm pt-1 font-medium leading-none text-slate-400">Play Online</p>
          <p className="text-xs pt-2 text-muted-foreground">Play vs a Person of Similar Skill</p>
        </div>
      </div>
    </div>
  );
}
