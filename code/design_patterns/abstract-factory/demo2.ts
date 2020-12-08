namespace AbstractFacroty_demo2 {
  // 面向接口编程

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
  abstract class DBConnectionFactory {
    abstract createDBConnection(): DBConnection;
  }
  abstract class DBCommandFactory {
    abstract createDBCommand(): DBCommand;
  }
  abstract class DBDataReaderFactory {
    abstract createDBDataReader(): DBDataReader;
  }

  // 具体工厂类
  class SqlConnectionFactory extends DBConnectionFactory {
    createDBConnection() {
      return new SqlConnection();
    }
  }
  class SqlCommandFactory extends DBCommandFactory {
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
    sqlConnectionFactory: DBConnectionFactory;
    sqlCommandFactory: DBCommandFactory;

    constructor(sqlConnectionFactory: DBConnectionFactory, sqlCommandFactory: DBCommandFactory) {
      this.sqlConnectionFactory = sqlConnectionFactory;
      this.sqlCommandFactory = sqlCommandFactory;
    }

    getEmployees() {
      const sqlConnection = this.sqlConnectionFactory.createDBConnection();
      sqlConnection.connectionString = "...";

      const sqlCommand = this.sqlCommandFactory.createDBCommand();
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
