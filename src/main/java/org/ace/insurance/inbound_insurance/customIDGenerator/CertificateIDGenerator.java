package org.ace.insurance.inbound_insurance.customIDGenerator;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.sql.*;

public class CertificateIDGenerator implements IdentifierGenerator {
    private static final String SEQUENCE_NAME = "certificate_id_seq";
    private static final String PREFIX = "IP/2024-";
    private static final String URL = "jdbc:sqlserver://localhost:1433;databaseName=INBOUND_INSURANCE;encrypt=true;trustServerCertificate=true";
    private static final String USERNAME = "sa";
    private static final String PASSWORD = "root";
    @Override
    public Object generate(SharedSessionContractImplementor sharedSessionContractImplementor, Object o) {
        try(Connection connection = DriverManager.getConnection(URL,USERNAME,PASSWORD)) {
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT NEXT VALUE FOR "+SEQUENCE_NAME);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
                Long nextValue = resultSet.getLong(1);
                String certificateID = PREFIX + String.format("%04d",nextValue);
                return certificateID;
            }

        }catch (SQLException e){
            e.printStackTrace();
        }
        return null;
    }
}
