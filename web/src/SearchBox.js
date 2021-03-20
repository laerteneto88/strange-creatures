function SearchBox ({ searchfield, searchChange }) {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--gold bg-light-yellow'
        type='search'
        placeholder='search criatures'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
