import React, { useState } from 'react'
import { initEmpData, initFormData } from './MockData'

const TableCrud = () => {
    const [empData, setEmpData] = useState(initEmpData)
    const [formData, setFormData] = useState(initFormData)
    const [editIdx, setEditIdx] = useState(-1)

    const addFnc = () => {
        setEmpData([...empData, formData])
        setFormData(initFormData)
    }
    const updateFnc = () => {
        empData[editIdx] = formData
        setEmpData([...empData])
        setFormData(initFormData)
    }

    const EditFnc = (obj, idx) => {
        setEditIdx(idx)
        setFormData(obj)
    }
    const DeleteFnc = (idx) => {
        empData.splice(idx, 1)
        setEmpData([...empData])
    }

    return (
        <div style={{ padding: "10px" }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: "10px" }}>
                <input type='text' placeholder='Name' value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input type='text' placeholder='Email' value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input type='text' placeholder='Phone' value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <div style={{ display: 'flex', gap: "10px", marginTop: "10px" }}>
                <button style={{ flex: 1 }} type='button' onClick={addFnc}>Add</button>
                <button style={{ flex: 1 }} type='button' onClick={updateFnc}>Update</button>
            </div>
            <div style={{ marginTop: "20px" }}>
                <table border={1} width={"100%"}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empData.map((obj, idx) =>
                                <tr key={idx}>
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.phone}</td>
                                    <td><button type='button' onClick={() => EditFnc(obj, idx)}>Edit</button></td>
                                    <td><button type='button' onClick={() => DeleteFnc(idx)}>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>

        </div>
    )
}

export default TableCrud


