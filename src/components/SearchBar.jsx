
import SearchBarIcon from '../assets/SearchIcon.svg'
const SearchBar = () => {
  return (
        <form action="">
            <div className="bg-white p-4 flex rounded-2xl text-lg">
                <input 
                    type="text" 
                    placeholder="Search Pokemon" 
                    className="outline-none flex-1" 
                />
                <button className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors">
                    <img src={SearchBarIcon} alt=""/>
                </button>
            </div>

        </form>
  )
}

export default SearchBar