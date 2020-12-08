namespace AbstractFacroty_demo1 {
  class SqlConnection {
    connectionString: string;
  }

  class SqlCommand {
    commandText: string;
    executeReader() {
      return new SqlDataReader();
    }
  }

  class SqlDataReader {
    read() {
      return [];
    }
  }

  class EmployedDAO {
    getEmployees() {
      const sqlConnection = new SqlConnection();
      sqlConnection.connectionString = "...";

      const sqlCommand = new SqlCommand();
      sqlCommand.commandText = "...";

      const data = sqlCommand.executeReader();

      while (data.read()) {
        //do something
      }
    }
  }

  // 如果需要支持的数据库怎么办
  // new 紧耦合需要去除
}
