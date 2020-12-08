namespace AbstractFacroty_demo3 {
  // 面向接口编程
  // 考虑将三个工厂，放在一起

  // 数据库访问有关的基类。
  abstract class DBConnection {
    connectionString: string;
  }
  abstract class DBCommand {
    commandText: string;
    connection: DBConnection;
    setConnection(connection: DBConnection) {
      this.connection = connection;
    }
    abstract executeReader(): DBDataReader;
  }
  abstract class DBDataReader {
    abstract read(): any[];
  }

  // 抽象工厂类
  abstract class DBFactory {
    // 放在一起，保持相关性
    abstract createDBConnection(): DBConnection;
    abstract createDBCommand(): DBCommand;
  }

  // 具体工厂类
  class SqlDBFactory extends DBFactory {
    createDBConnection() {
      return new SqlConnection();
    }
    createDBCommand() {
      return new SqlCommand();
    }
  }

  // 支持sqlServer
  class SqlConnection extends DBConnection {}

  class SqlCommand extends DBCommand {
    executeReader() {
      return new SqlDataReader();
    }
  }

  class SqlDataReader extends DBDataReader {
    read() {
      return [];
    }
  }

  class EmployedDAO {
    sqlDBFactory: DBFactory;

    constructor(sqlDBFactory: DBFactory) {
      this.sqlDBFactory = sqlDBFactory;
    }

    getEmployees() {
      const sqlConnection = this.sqlDBFactory.createDBConnection();
      sqlConnection.connectionString = "...";

      const sqlCommand = this.sqlDBFactory.createDBCommand();
      sqlCommand.setConnection(sqlConnection);
      sqlCommand.commandText = "...";

      const data = sqlCommand.executeReader();

      while (data.read()) {
        //do something
      }
    }
  }

  //此时。DBConnectionFactory，DBCommandFactory应该具有关联性，但是现在无法避免此种情况
}
