import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import Button from '@mui/material/Button';

export default function Headers() {
  return (
    <div className="w-screen absolute flex justify-center shadow-light backdrop-blur-sm bg-white/10 border-white border-b-2 z-[100]">
      <div className="w-8/12 h-12 flex flex-row justify-between items-center bg-transparent">
        <Button className="text-white" href="/"><span className='text-white'>Alice website</span></Button>
        <div>
          <Button href="/about" variant="text" className="mx-3"><span className='text-white'>about</span></Button>
          <Button variant="text" className="mx-3" href='/works'><span className='text-white'>works</span></Button>
          <Button href="https://github.com/alicevvv"><GitHubIcon className='text-white'/></Button>
          <Button href="https://codepen.io/aavlice"><CodeIcon className='text-white'/></Button>
        </div>
      </div>
    </div>
  );
}
