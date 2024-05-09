import React from "react";

const TableCell = ({ is_th, className, children, width }) => {
    const cls = "px-4 py-3 border-b border-grey-50 border-dashed " + className;

    if (is_th) {
        return (
            <th width={width} className={cls + " text-left"}>
                {children}
            </th>
        );
    }

    return (
        <td width={width} className={cls}>
            {children}
        </td>
    );
};

export default TableCell;
