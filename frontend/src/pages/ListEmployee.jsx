import HeaderTable from "../components/HeaderTable"
import EmployeeCard from "../components/Employeecard"
import { Table } from "../styles/Table.style"
import ButtonsReturnAdd from "../components/ButtonsReturnAdd"

export default function ListEmployee(){
    return(
        <div>
            <ButtonsReturnAdd/>
            <Table>   
                <HeaderTable/>
                <EmployeeCard/>
            </Table>
        </div>

    )
}