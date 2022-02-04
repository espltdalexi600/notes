import { useMemo } from 'react'

export const useSortedNotes = (notes, sort) => {
  const sortedNotes = useMemo(() => {
    if (notes.length < 2 || !sort) return notes

    if (sort === 'dateOfChange' || sort === 'dateOfView') {
      return [...notes].sort((a, b) =>
        new Date(a[sort]) > new Date(b[sort]) ? -1 : 1,
      )
    }

    return [...notes].sort((a, b) => a[sort].localeCompare(b[sort]))
  }, [notes, sort])

  return sortedNotes
}

export const useNotes = (notes, sort, search) => {
  const sortedNotes = useSortedNotes(notes, sort)

  const sortedAndSearchedNotes = useMemo(() => {
    let strSearch = search.trim()
    if (!strSearch) return sortedNotes
    return sortedNotes.filter(
      (item) => item.title.includes(strSearch) || item.body.includes(strSearch),
    )
  }, [search, sortedNotes])

  return sortedAndSearchedNotes
}
