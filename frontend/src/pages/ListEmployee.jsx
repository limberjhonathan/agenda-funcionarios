import HeaderTable from "../components/HeaderTable"
import EmployeeCard from "../components/Employeecard"
import { Table } from "../styles/Table.style"

export default function ListEmployee(){
    return(
        <Table>   
            <HeaderTable/>
            <EmployeeCard/>
        </Table>

    )
}