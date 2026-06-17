export const CATEGORIES = [
  { id:1, value: 'food',          label: 'Food',          icon: '🍔', color: 'bg-red-500/15'    },
  { id:2,value: 'income',        label: 'Income',        icon: '💰', color: 'bg-emerald-500/15'},
  { id:3,value: 'travel',        label: 'Travel',        icon: '🚌', color: 'bg-blue-500/15'   },
  { id:4,value: 'shopping',      label: 'Shopping',      icon: '🛍️', color: 'bg-yellow-500/15' },
  { id:5,value: 'utilities',     label: 'Utilities',     icon: '⚡', color: 'bg-purple-500/15' },
  { id:6,value: 'entertainment', label: 'Entertainment', icon: '🎮', color: 'bg-pink-500/15'   },
  { id:7,value: 'health',        label: 'Health',        icon: '🏥', color: 'bg-teal-500/15'   },
]

// Helper — get one category by its value
export const getCategoryByValue = (value) => {
  return CATEGORIES.find(c => c.value === value)
}
