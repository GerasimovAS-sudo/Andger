const BOOK_REGISTRY = [
  typeof MAGIC_MORNING !== 'undefined' ? MAGIC_MORNING : null,
  typeof ATOMIC_HABITS !== 'undefined' ? ATOMIC_HABITS : null,
  typeof TRANSURFING !== 'undefined' ? TRANSURFING : null
].filter(Boolean);