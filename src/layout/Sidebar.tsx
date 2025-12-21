import { Link } from 'react-router-dom';
import { Home, Search, Library } from 'lucide-react'; // 引入图标

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black h-full flex flex-col border-r border-neutral-800">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-8">Music App</h1>
        <nav className="space-y-4">
          <Link
            to="/"
            className="flex items-center text-neutral-400 hover:text-white transition gap-4 text-lg font-medium"
          >
            <Home size={24} /> 发现
          </Link>
          <Link
            to="/search"
            className="flex items-center text-neutral-400 hover:text-white transition gap-4 text-lg font-medium"
          >
            <Search size={24} /> 搜索
          </Link>
          <div className="flex items-center text-neutral-400 hover:text-white transition gap-4 text-lg font-medium cursor-not-allowed opacity-50">
            <Library size={24} /> 歌单 (待开发)
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
