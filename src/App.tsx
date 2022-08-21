import './App.css'
import * as Component from './App.styles'
import { useState, useEffect } from 'react'
import { Category } from './types/Category'
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea/Index'
import { InfoArea } from './components/InfoArea/Index'
import { InputArea } from './components/InputArea/Index'

function App() {
  const [list, setList] = useState<Item[]>(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for (let item in filteredList) {
      if (categories[filteredList[item].category].expense) {
        expenseCount += filteredList[item].value
      } else {
        incomeCount += filteredList[item].value
      }
    }

    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList])

  // useEffect(() => {
  //   console.log(currentMonth)
  // }, [])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  return (
    <Component.Container>
      <Component.Header>
        <Component.HeaderText>Financial Tracker App</Component.HeaderText>
      </Component.Header>
      <Component.Body>
        {/* info */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* input area */}
        <InputArea onAdd={handleAddItem} />
        {/* item table */}
        <TableArea list={filteredList} />
      </Component.Body>
    </Component.Container>
  )
}

export default App
