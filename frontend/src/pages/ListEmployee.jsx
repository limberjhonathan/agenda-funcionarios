import HeaderTable from "../components/HeaderTable"
import EmployeeCard from "../components/Employeecard"
import ButtonReturn from "../components/BUttonReturn"
import { Table } from "../styles/Table.style"

export default function ListEmployee(){
    return(
        <div>
            <ButtonReturn/>
            <Table>   
                <HeaderTable/>
                <EmployeeCard/>
            </Table>
        </div>

    )
}