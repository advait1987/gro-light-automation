package com.gro.model.rpicomponent.component;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.RPiComponentType;
import com.gro.model.rpicomponent.preferences.RelayPreferences;

@Entity
public class Relay extends AbstractRPiComponent {
    private static final long serialVersionUID = 7384389994862545570L;
    
    @OneToOne(cascade=CascadeType.ALL)
    private RelayPreferences preferences;
    
    public Relay() {
        this.type = RPiComponentType.RELAY;
    }

    public RelayPreferences getPreferences() {
        return preferences;
    }

    public void setPreferences(RelayPreferences preferences) {
        this.preferences = preferences;
    }
    
}
