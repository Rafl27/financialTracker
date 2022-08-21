import * as Component from './styles'
import { Container } from '../../App.styles'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem/Index'

type Props = {
  currentMonth: string
  onMonthChange: (newMonth: string) => void
  income: number
  expense: number
}

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props): any => {
  const handlePreviousMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return (
    <Component.Container>
      <Component.MonthArea>
        <Component.MonthArrow onClick={handlePreviousMonth}>
          ⬅️
        </Component.MonthArrow>
        <Component.MonthTitle>
          {formatCurrentMonth(currentMonth)}
        </Component.MonthTitle>
        <Component.MonthArrow onClick={handleNextMonth}>
          ➡️
        </Component.MonthArrow>
      </Component.MonthArea>
      <Component.ResumeArea>
        <ResumeItem title="Receitas" value={income}></ResumeItem>
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem 
        title="Balanço" 
        value={income - expense}
        color={(income - expense) < 0 ? 'red' : 'green'}
        ></ResumeItem>
      </Component.ResumeArea>
    </Component.Container>
  )
}
