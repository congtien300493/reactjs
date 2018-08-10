import React, { Component } from 'react';

class Table extends Component {
    render() {
        var maSV='NV29898';
        var hoTen='Đỗ Công Tiền';
        var queQuan='Bến Tre';

        var sinhVien={
            maSV: 'NV29797',
            hoTen: 'Nguyễn Công Phượng',
            queQuan: 'Sông Lam Nghệ An',
            status: true
        };

        var sinhViens =[
            {
                maSV: 'NV29790',
                hoTen: 'Nguyễn Công Phượng',
                queQuan: 'Sông Lam Nghệ An',
                status: true
            },
            {
                maSV: 'NV29791',
                hoTen: 'Nguyễn Công Phượng',
                queQuan: 'Sông Lam Nghệ An',
                status: true
            },
            {
                maSV: 'NV29792',
                hoTen: 'Nguyễn Công Phượng',
                queQuan: 'Sông Lam Nghệ An',
                status: true
            }
        ]


        var elements = sinhViens.map((sinhVien,index) => {
            return <tr>
                        <td>{sinhVien.maSV}</td>
                        <td>{sinhVien.hoTen}</td>
                        <td>{sinhVien.queQuan}</td>
                        <td>{sinhVien.status ? 'Đang Hoạt Động' :'Ngưng hoạt động'}</td>
                    </tr>
        });
        function showInfo(sinhVien){
            if(sinhVien.status){
                return <tr key="sinhVien.maSV">
                            <td>{sinhVien.maSV}</td>
                            <td>{sinhVien.hoTen}</td>
                            <td>{sinhVien.queQuan}</td>
                            <td>{sinhVien.status ? 'Đang Hoạt Động' :'Ngưng hoạt động'}</td>
                        </tr>
            }
           
        }
        return (
            
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Mã Sinh Viên</th>
                        <th>Tên Sinh Viên</th>
                        <th>Quê Quán</th>
                        <th>Trạng Thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{maSV}</td>
                        <td>{hoTen}</td>
                        <td>{queQuan}</td>
                        <td>Đang Hoạt Động</td>
                    </tr>
                    <tr>
                        <td>{sinhVien.maSV}</td>
                        <td>{sinhVien.hoTen}</td>
                        <td>{sinhVien.queQuan}</td>
                        <td>{sinhVien.status ? 'Đang Hoạt Động' :'Ngưng hoạt động'}</td>
                    </tr>
                    {showInfo(sinhVien)}
                    {elements}

                </tbody>
            </table>
            
        );
    }
}

export default Table;