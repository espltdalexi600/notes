import { useMemo } from 'react'

export const useSortedNotes = (notes, sort) => {
  const sortedNotes = useMemo(() => {
    if (notes.length < 2 || !sort) return notes

    if (sort.startsWith('date')) {
      return [...notes].sort((a, b) =>
        new Date(a[sort]) > new Date(b[sort]) ? -1 : 1,
      )
    }

    return [...notes].sort((a, b) => {
      if (!a[sort] && !b[sort]) return 0
      if (!a[sort]) return 1
      if (!b[sort]) return -1

      return a[sort].localeCompare(b[sort])
    })
  }, [notes, sort])

  return sortedNotes
}

export const useNotes = (notes, sort, search) => {
  const sortedNotes = useSortedNotes(notes, sort)

  const sortedAndSearchedNotes = useMemo(() => {
    const regexp = new RegExp(search, 'i')
    if (!search) return sortedNotes
    return sortedNotes.filter(
      (item) => regexp.test(item.title) || regexp.test(item.body),
    )
  }, [search, sortedNotes])

  return sortedAndSearchedNotes
}
