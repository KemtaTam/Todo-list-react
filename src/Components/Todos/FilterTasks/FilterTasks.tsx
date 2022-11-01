import { useState } from 'react'

import { useActions } from '../../../hooks/actions'
import { StatusType } from '../../../redux/todos.slice'

import s from './FilterTasks.module.css'

export const FilterTasks = () => {
	const { filterTasks } = useActions()
	const [active, setActive] = useState('all')

	const filterHandler = (type: StatusType | 'all') => {
		filterTasks(type)
		setActive(type)
	}

	return (
		<div className={s.sort}>
			<button className={active === 'all' ? s.active : ''} onClick={() => filterHandler('all')}>
				All
			</button>
			<button className={active === 'todo' ? s.active : ''} onClick={() => filterHandler('todo')}>
				Todo
			</button>
			<button className={active === 'pending' ? s.active : ''} onClick={() => filterHandler('pending')}>
				Pending
			</button>
			<button className={active === 'complete' ? s.active : ''} onClick={() => filterHandler('complete')}>
				Complete
			</button>
		</div>
	)
}
