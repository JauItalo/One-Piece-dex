import PropTypes from "prop-types";
const CharacterFilter = ({ search, setSearch, bando, setBando, cargo, setCargo, bandos, cargos }) => (
	<div className="flex flex-col gap-2 sm:gap-4 mb-4 sm:mb-6 w-full sm:flex-row sm:justify-center sm:items-center">
		<input
			type="text"
			placeholder="Buscar personagem..."
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 text-sm sm:text-base"
		/>
		<select
			value={bando}
			onChange={(e) => setBando(e.target.value)}
			className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 text-sm sm:text-base"
		>
			{bandos.map((b) => (
				<option key={b} value={b}>{b}</option>
			))}
		</select>
		<select
			value={cargo}
			onChange={(e) => setCargo(e.target.value)}
			className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 text-sm sm:text-base"
		>
			{cargos.map((c) => (
				<option key={c} value={c}>{c}</option>
			))}
		</select>
	</div>
);

export default CharacterFilter;

CharacterFilter.propTypes = {
	search: PropTypes.string.isRequired,
	setSearch: PropTypes.func.isRequired,
	bando: PropTypes.string.isRequired,
	setBando: PropTypes.func.isRequired,
	cargo: PropTypes.string.isRequired,
	setCargo: PropTypes.func.isRequired,
	bandos: PropTypes.arrayOf(PropTypes.string).isRequired,
	cargos: PropTypes.arrayOf(PropTypes.string).isRequired,
};
