type TableProps = {
    rows: Record<string, any>[];  // Array of row objects where keys are column names
    style?: string
};

const Table = ({ rows,style }: TableProps) => {
    const headers = rows[0] ? Object.keys(rows[0]) : [];

    return (
        <table className={`table-auto overflow-auto ${style}`}>
            <thead>
                <tr>
                    {headers.map((item, index) => (
                        <th key={index} className="px-4 py-2 text-left font-medium">
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={`even:bg-white odd:bg-gray-100`}>
                        {headers.map((column, colIndex) => (
                            <td key={colIndex} className="px-4 py-2 text-left">
                                {row[column] || "-"} {/* Accessing the value for each row and column */}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;